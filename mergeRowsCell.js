/**
	合并相邻行内容相同的单元格
    需确保初始化时的列数一致
    实例化之前不可有合并过的单元格,实例化之后可重复执行合并操作
    website:https://github.com/tabooc/mergeRowsCell
*/

//@param {String} tableId  节点id
//@param {Number} col 要合并的列
//@param {Number} start 开始行
function mergeRowsCell(tableId, col, start) {
    this.box = document.getElementById(tableId); //容器
    this.col = col || 0; //需要合并的列
    this.start = start || 0; //起始行
    this.rowsLength = this.box.rows.length;
    this.maxLenth = 0;
    this.runSum = 0;
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
//@param {element} ele
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
//查找节点
//@param {Number} row
//@param {Number} col
mergeRowsCell.prototype.findNode = function(row, col) {
    return this.box.querySelector('th[data-mark="' + (row + '.' + col) + '"]') || this.box.querySelector('td[data-mark="' + (row + '.' + col) + '"]');
};
//合并单元格
//@param {Number} start
//@param {Number} col
mergeRowsCell.prototype.merge = function(start, col) {
    var rowSpan,
        start = start || this.start,
        col = col || this.col,
        now, next, temp;

    now = this.findNode(start, col);
    rowSpan = now ? now.rowSpan : 1;
    next = this.findNode(start + rowSpan, col);

    while (start < this.rowsLength) {
        if (next && now.innerHTML == next.innerHTML) {
            now.rowSpan += 1;
            next.parentNode.removeChild(next);
            start = this.getCellMark(now)[0] + now.rowSpan;
            next = this.findNode(start, col);
        } else {
            start = this.getCellMark(next)[0];
            if (!start) {
                return ;
            }
            now = this.findNode(start, col); //next -> now,避免引用..
            next = this.findNode(this.getCellMark(now)[0] + now.rowSpan, col);

        }
        // console.log(this.runSum);
        this.runSum++;
    }
};
