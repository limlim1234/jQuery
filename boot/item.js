$(document).ready(function () {

    let page = window.location.pathname;

    let jspage = page.substring(page.lastIndexOf('.') + 1); //뒤에서 부터 인덱스를 찾기

    page = page.substring(page.lastIndexOf('/') + 1, page.lastIndexOf('.'))
    console.log(page);
    $('.nav-item').on('click', function () {
        $('.nav-item').removeClass('active'); // 흰색으로 바뀐거 나머지는 검은색
        $(this).addClass('active'); // 홈 어바웃 서비스 클릭하면 흰색으로 바뀜
    });

    if (jspage == 'jsp') {
        //jsp page
        $('#carouselExampleIndicators').css('display', 'none');
        $('#carouselExampleIndicators').after($('<div />').css('height', '23px'));
        $(data).each(function (idx, obj) { //인덱스 오브젝트
            if (obj.item_no == localStorage.getItem('itemNo')) { //같을경우 페이지 만들어주세요
                createContentItem(obj);
            }
        });

    } else {
        //html.page
        let grepData = $.grep(data, function (a, b) { //인덱스 오브젝트
            return a.category == page;
        })

        $(grepData).each(function (idx, obj) { //data는 data.js에서의 변수이름
            createRowItem(obj);
        });

    }




});
function createContentItem(item) {
    let div1 = $('<div />').addClass('col-lg-12 col-md-12 mb-4');
    let div2 = $('<div />').addClass('card h-100');
    let a1 = $('<a />').attr('href', item.link + '?item_no=' + item.item_no); 
    let img1 = $('<img />').addClass('card-img-top').attr({
        'src': item.image,
        'alt': item.alt
    });
    let div3 = $('<div />').addClass('card-body');
    let h_4 = $('<h4 />').addClass('card-title');
    let a2 = $('<a />').attr('href', item.link + '?item_no=' + item.item_no).html(item.item + "(" + item.item_no + ")");
    let h_5 = $('<h5 />').html(new Intl.NumberFormat('ko-KR', {
        style: 'currency',
        currency: 'KRW'
    }).format(item.price)); 
    let p1 = $('<p />').addClass('card-text').html(item.content);
    let div4 = $('<div />').addClass('card-footer');
    let star = ''; 
    let cnt = Math.floor(item.star);
    for (let i = 0; i < cnt; i++) {
        star += '&#9733;'; 
    }
    let half = item.star - cnt;
    if (half) {
        star += '&#9734'; 
    }
    let small = $('<small />').addClass('text-muted').html(star);

    a1.append(img1);
    div3.append(h_4, h_5, p1);
    h_4.append(a2);
    div4.append(small);
    div2.append(a1, div3, div4)
    div1.append(div2);

    $('.container .row .row').append(div1);
}



function createRowItem(item) {
    let div1 = $('<div />').addClass('col-lg-4 col-md-6 mb-4'); //스타일 정의 4 6은 클래스 번호
    let div2 = $('<div />').addClass('card h-100');
    let a1 = $('<a />').attr('href', item.link + '?item_no=' + item.item_no); //jsp넘겨주는거
    let img1 = $('<img />').addClass('card-img-top').attr({
        'src': item.image,
        'alt': item.alt
    });
    let div3 = $('<div />').addClass('card-body');
    let h_4 = $('<h4 />').addClass('card-title');
    let a2 = $('<a />').attr('href', item.link + '?item_no=' + item.item_no).html(item.item + "(" + item.item_no + ")");
    let h_5 = $('<h5 />').html(new Intl.NumberFormat('ko-KR', {
        style: 'currency',
        currency: 'KRW'
    }).format(item.price)); //원화표시
    let p1 = $('<p />').addClass('card-text').html(item.content);
    let div4 = $('<div />').addClass('card-footer');
    let star = ''; //평점
    let cnt = Math.floor(item.star);
    for (let i = 0; i < cnt; i++) {
        star += '&#9733;'; //1
    }
    let half = item.star - cnt;
    if (half) {
        star += '&#9734'; //0.5
    }
    let small = $('<small />').addClass('text-muted').html(star);

    a1.append(img1);
    div3.append(h_4, h_5, p1);
    h_4.append(a2);
    div4.append(small);
    div2.append(a1, div3, div4)
    div1.append(div2);

    $('.container .row .row').append(div1);
}