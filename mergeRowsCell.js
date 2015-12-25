/*
	合并相邻行内容相同的纵向单元格
    需确保初始化时的列数一致
    实例化之前不可有合并过的单元格,实例化之后可重复执行合并操作
*/

//@param {tableId} String  节点id
//@param {col} Number  要合并的列
//@param {start} Number  开始行
function mergeRowsCell(tableId, col, start) {
    this.box = document.getElementById(tableId); //容器
    this.col = col || 0; //需要合并的列
    this.start = start || 0; //起始行
    this.initHtml = this.box.rows[this.start].cells[this.col].innerHTML;
    this.rowsLength = this.box.rows.length;
    this.maxLenth = 0;
    this.init();
}
//执行行单元格合并后,对应的列数已经变化,需建立MAP方便对应合并
mergeRowsCell.prototype.init = function() {
    var rowsLen = this.rowsLength;
    var colsMap = [];
    var map = [];

    for (var i = 0; i < rowsLen; i++) {
        colsMap.push(this.box.rows[i].cells.length);
    }

    var maxLenth = this.maxLenth = Math.max.apply(Math, colsMap);


    //初始化时候每个单元格都是存在的,统一加上原始标识,后续无论怎么变化,都可以轻松找到对应的下一行单元格    
    for (var x = 0; x < rowsLen; x++) {
        for (var y = 0; y < maxLenth; y++) {
            this.box.rows[x].cells[y].setAttribute('data-mark', x + '.' + y);
        }
    }

};
//获取单元格标识
//@param {mark} elment
mergeRowsCell.prototype.getCellMark = function(ele) {
    var markArr = [];

    if (ele) {
        markArr[0] = ele.getAttribute('data-mark').split('.')[0] - 0;
        markArr[1] = ele.getAttribute('data-mark').split('.')[1] - 0;
    } else {
        console.warn('没有找到对应节点');
    }

    return markArr;
};
//下一个节点
//@param {ele} element
//@param {row} Number
//@param {col} Number
mergeRowsCell.prototype.next = function(ele, row, col) {
    return ele.querySelector('th[data-mark="' + (row + '.' + col) + '"]') || ele.querySelector('td[data-mark="' + (row + '.' + col) + '"]');
};
mergeRowsCell.prototype.merge = function(start, col) {
    var rowsSpan,
        table = this.box,
        start = start || this.start,
        col = col || this.col,
        next;

    while (start < this.rowsLength - 1) {
        rowsSpan = table.rows[start].cells[this.col].rowSpan;

        next = this.next(table, start + rowsSpan, this.col);
        // console.log(next);
        if (!next) {
            return false;
        }

        if (table.rows[start].cells[this.col].innerHTML == next.innerHTML) {

            table.rows[start].cells[this.col].rowSpan += 1;            
            next.parentNode.removeChild(next);
            // table.rows[start + rowsSpan].deleteCell(this.col);
            start += 1;
        } else {
            start += rowsSpan;
        }

        this.merge(start, col);
    }
};