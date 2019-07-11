(function (window, document) {
    var table = document.querySelector('#my-drag-table');

    function insertDataToTable(datas) {

    }

    function TableDatas(headers, tableData) {
        this.headers = headers;
        this.datas = TableDatas;
    }

    function Header(width, name, dataKey) {
        this.width = width;
        this.name = name;
        this.dataKey = dataKey;
    }

    var cols = 5;
    var rows = 5;
    function createData() {
        var headers = [];
        for (var i = 0; i < cols; i++) {
            var header = new Header(120, `第${i + 1}列`, i);
            headers.push(header);
        }

        var datas = [];
        for (var i = 0; i < rows; i++) {
            for (var j = 0; j < headers.length; j++) {
                if (!datas[i]) {
                    datas[i].push(`第${i}行-${headers[j].name}`);
                }
            }
        }
        var tableData = new TableDatas(headers , datas);
        return tableData;
    }

    function initTable() {
        
    }

})(window, document)