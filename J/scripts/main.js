var options = generateOptions();

document.querySelector('.chained-selects').addEventListener('change', onChange, false);

function onChange(e) {
    e.stopPropagation();

    var s = e.target;

    if (!s.nextElementSibling)
        return;

    var next = s.nextElementSibling;

    if (s.selectedIndex === 0)
        deactivateBoxes(next);
    else {
        var path = [];
        for (var p = s; p; p = p.previousElementSibling) {
            var selOptNode = p.options[p.selectedIndex];
            path.push(selOptNode.value);
        }
        path.reverse();

        var children = path.reduce(
            function (o, optName) {
                return o[optName];
            },
            options
        );

        /*
        if (children === null) {
         children = fetch(path);
         o[...] = children;
        }
        */

        children = Object.keys(children);

        // Insert children in s.nextChild
        for (var q = next.firstElementChild.nextElementSibling; q; q = nextq) {
            nextq = q.nextElementSibling;
            next.removeChild(q);
        }
        for (var i = 0; i < children.length; ++i) {
            var optEl = document.createElement('option');
            optEl.innerHTML = children[i];
            next.appendChild(optEl);
        }

        next.selectedIndex = 0;
        next.disabled = false;

        deactivateBoxes(next.nextElementSibling);
    }
}

function deactivateBoxes(s) {
    while (s) {
        s.selectedIndex = 0;
        s.disabled = true;

        s = s.nextElementSibling;
    }
}

function generateOptions() {
    return {
        '台北市': {
            '大安區': {
                '50嵐(大安店)': null,
                '50嵐 復興店': null,
                '50嵐 通化店': null,
                '50嵐 SOGO店': null,
                '50嵐 永康店': null,
                '50嵐 忠孝延吉店': null,
            },
            '信義區': {
                '莊敬店': null,
                '松山店': null,
                '世貿店': null,
                'A11店(原微風松高店)': null,
                '市府店': null,
            },
            '松山區': {
                '長春店': null,
                '北寧店': null,
                '新東店(原林森店)': null,
                '八德店': null,
                '民生店': null,
                '饒河店': null,
                '南京三民店': null,
            },
            '中山區': {
                '吉林店': null,
                '長安店': null,
                '合江店': null,
                '遼寧店(原微風店)': null,
                '雙連店': null,
                '四平店': null,
                '晴光店': null,
                '伊通店': null,
                '大直北安店': null,
                '實踐店': null,
                '南西店': null,
                'R79店': null,
            },
        },
        '基隆市': {
            '仁愛區': {
                '基隆廟口店': null,
            },
        },
        '新北市': {
            '板橋區': {
                '台北縣總店': null,
                '板橋中正店': null,
                '四川店': null,
                '板橋中山二店': null,
                '板橋文化店': null,
                '板橋莒光店': null,
                '亞東店': null,
            },
            '三重區': {
                '正義店': null,
                '文化店': null,
                '三和店': null,
                '重新店': null,
                '中正北店': null,
                '五華店': null,
            },
            '鶯歌區': {
                '鶯桃店': null,
                '鶯歌建國店': null,
            }
        }
    };
}