# mergeRowsCell
## 合并相邻行内容相同的单元格
### 适用场景
- 需确保初始化时的列数一致
- 实例化之前不可有合并过的单元格,实例化之后可多次执行合并操作
- 适用浏览器:IE8+及现代浏览器

<table id="J_table" class="m-table">
        <tr>
            <th>abcde</th>
            <td>content_001</td>
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
            <th>abc</th>
            <td>content_01</td>
            <td>content_02</td>
            <td>content_03</td>
        </tr>
        <tr>
            <th>abc</th>
            <td>content_001</td>
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
            <th>abc</th>
            <td>content_01</td>
            <td>content_02</td>
            <td>content_03</td>
        </tr>
        <tr>
            <th>abcd</th>
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
            <th>abcde</th>
            <td>content_01</td>
            <td>content_02</td>
            <td>content_03</td>
        </tr>
        <tr>
            <th>abcde</th>
            <td>content_01</td>
            <td>content_02</td>
            <td>content_03</td>
        </tr>
    </table>

对以上table执行以下操作:
```
var demo = new mergeRowsCell('J_table');
    //(开始行,需要合并的列)
    demo.merge(0,0);
    demo.merge(0,1);
    //...
    //demo.merge(1,3);
```

效果如下:
<table id="J_table" class="m-table">
    <tbody><tr>
        <th data-mark="0.0">abcde</th>
        <td data-mark="0.1">content_001</td>
        <td data-mark="0.2">content_02</td>
        <td data-mark="0.3">content_03</td>
    </tr>
    <tr>
        <th data-mark="1.0" rowspan="5">abc</th>
        <td data-mark="1.1" rowspan="2">content_01</td>
        <td data-mark="1.2">content_02</td>
        <td data-mark="1.3">content_03</td>
    </tr>
    <tr>
        
        
        <td data-mark="2.2">content_02</td>
        <td data-mark="2.3">content_03</td>
    </tr>
    <tr>
        
        <td data-mark="3.1">content_001</td>
        <td data-mark="3.2">content_02</td>
        <td data-mark="3.3">content_03</td>
    </tr>
    <tr>
        
        <td data-mark="4.1" rowspan="6">content_01</td>
        <td data-mark="4.2">content_02</td>
        <td data-mark="4.3">content_03</td>
    </tr>
    <tr>
        
        
        <td data-mark="5.2">content_02</td>
        <td data-mark="5.3">content_03</td>
    </tr>
    <tr>
        <th data-mark="6.0">abcd</th>
        
        <td data-mark="6.2">content_02</td>
        <td data-mark="6.3">content_03</td>
    </tr>
    <tr>
        <th data-mark="7.0">abc</th>
        
        <td data-mark="7.2">content_02</td>
        <td data-mark="7.3">content_03</td>
    </tr>
    <tr>
        <th data-mark="8.0" rowspan="2">abcde</th>
        
        <td data-mark="8.2">content_02</td>
        <td data-mark="8.3">content_03</td>
    </tr>
    <tr>
        
        
        <td data-mark="9.2">content_02</td>
        <td data-mark="9.3">content_03</td>
    </tr>
</tbody></table>
