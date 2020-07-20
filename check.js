function check() {
var price = $('input[name="price"]:checked').val()
var yt = $('input[name="yt"]:checked').val()
var pp = $('input[name="pp"]:checked').val()
var jx = $('input[name="jx"]:checked').val()
var yj = $('input[name="yj"]:checked').val()
var cpu = $('input[name="cpu"]:checked').val()
var mmcc = $('input[name="mmcc"]:checked').val()
var yp = $('input[name="yp"]:checked').val()
var nc = $('input[name="nc"]:checked').val()
if(price==null)
{
alert('请选择预算区间')
}
else if(yt==null)
{
alert('请选择用途')
}

else if(jx==null)
{
alert('请选择机型')
}

else if(yj==null)
{
alert('请选择是否有硬件要求')
}
else
document.getElementById("itemlist").style.display = 'block' ;
}

function pzset(id){

if(id=='1')
{
document.getElementById("pzbox").style.display = 'block' ;
}
if(id=='0')
{
document.getElementById("pzbox").style.display = 'none' ;
}
	
	}