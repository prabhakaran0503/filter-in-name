var input=["anna","beth","cara","david"]

var ans=input.filter(function(value,index){
    return index;
})
console.log(ans);
document.write("the No1 winner is"+ans[0]+"<br>");
document.write("the No2 winner is"+ans[1]+"<br>");
document.write("the No3 winner is"+ans[2]+"<br>");
document.write("sorry"+ans[3]+"is not one of the winner");