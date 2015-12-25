# mergeRowsCell
===================

## 合并相邻行内容相同的纵向单元格
### 适用场景
- 需确保初始化时的列数一致
- 实例化之前不可有合并过的单元格,实例化之后可重复执行合并操作

<table id="J_table" class="m-table">
        <tbody><tr>
            <th>abcde</th>
            <td>content_01</td>
            <td>content_02</td>
            <td>content_03</td>
        </tr>
        <tr>
            <th rowspan="4">abc</th>
            <td>content_01</td>
            <td>content_02</td>
            <td>content_03</td>
        </tr>
        <tr>
            
            <td>content_01</td>
            <td>content_02</td>
            <td>content_03</td>
        </tr>
        <tr>
            
            <td>content_01</td>
            <td>content_02</td>
            <td>content_03</td>
        </tr>
        <tr>
            
            <td>content_01</td>
            <td>content_02</td>
            <td>content_03</td>
        </tr>
        <tr>
            <th rowspan="2">abcd</th>
            <td>content_01</td>
            <td>content_02</td>
            <td>content_03</td>
        </tr>
        <tr>
            
            <td>content_01</td>
            <td>content_02</td>
            <td>content_03</td>
        </tr>
        <tr>
            <th>abc</th>
            <td>content_01</td>
            <td>content_02</td>
            <td>content_03</td>
        </tr>
        <tr>
            <th rowspan="2">abcde</th>
            <td>content_01</td>
            <td>content_02</td>
            <td>content_03</td>
        </tr>
        <tr>
            
            <td>content_01</td>
            <td>content_02</td>
            <td>content_03</td>
        </tr>
    </tbody></table>
