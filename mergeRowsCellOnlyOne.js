/*
	合并相邻行内容相同的纵向单元格
    需确保初始化时的列数一致
    同一表格只允许操作一次
*/

function mergeRowsCellOnlyOne(tableId, col, start) {
    this.box = document.getElementById(tableId); //容器
    this.col = col || 0; //需要合并的列
    this.start = start || 0; //起始行
    this.initHtml = this.box.rows[this.start].cells[this.col].innerHTML;
    this.rowsLength = this.box.rows.length;
    this.colsLength = this.box.rows[this.start].cells.length;
    this.init(this.start);
}

mergeRowsCellOnlyOne.prototype.init = function(start) {
    var rowsSpan,
        table = this.box,
        cellsLen;

    while (start < this.rowsLength) {
        rowsSpan = table.rows[start].cells[this.col].rowSpan;
        cellsLen = table.rows[start].cells.length;
        // console.log(cellsLen);
        if (cellsLen == this.colsLength) {
            if ((start + rowsSpan) < this.rowsLength) {
                if (table.rows[start].cells[this.col].innerHTML == table.rows[start + rowsSpan].cells[this.col].innerHTML) {
                    table.rows[start + rowsSpan].deleteCell(this.col);
                    table.rows[start].cells[this.col].rowSpan += 1;

                    this.init(start);
                } else {
                    this.init(start + rowsSpan);
                }

            }
        }
        start++;
    }
};