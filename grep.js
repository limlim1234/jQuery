let members=[];

members.push({name: "hong",point:80});
members.push({name: "hwang",point:100});
members.push({name: "park",point:95});
members.push({name: "choi",point:50});
members.push({name: "ryu",point:30});

$(members).each((a,b) =>{
    console.log(a,b);
    
});
//console.clear();
let grepMem = $.grep(members,(a,b) => {//b가 인덱스
    console.log(a,b);
    return(a.point>50 ? a:null); //50점 초과인 사람들만 가져와
});

console.log(grepMem);
//console.clear();
let sum = $(grepMem).map((a,b)=> { //먼저 요소를 가지고 와서 맵해도 됨 b가 오브젝트
    return b.point;

}).get();
console.log("전체point 값: " + sum);
