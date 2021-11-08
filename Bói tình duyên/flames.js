
//checking the user entered name-
function check(name)
{
	var new_name = name.value;

            	if(!isNaN(new_name))
            	{
            		new_name = new_name.substring(0,(new_name.length-1));
            		name.value = new_name;
            	}
}
//calculating and validating the F L A M E S
function calc()
{
	//getting names from user
	var fname = document.getElementById('yname').value;
	var sname = document.getElementById('pname').value;
	//alert if button is pressed without entering the names
	if (fname=='') {
		alert("Tên của người thứ nhất là gì?");
	}
	else if (sname=='') {
		alert("Tên của người thứ hai là gì?");
	}

    var r = /\s+/g;
    var orfirst = document.first.name.value.toUpperCase();
    var nam=orfirst;
    orfirst = orfirst.replace(r,"");
    if(orfirst!="")
    {
			var count = 0;
            var first = orfirst;
            second = eval("document.first.name"+1).value.toUpperCase();
            var names=second;
            second = second.replace(r,"");
            if(second != "")
            {
                document.getElementById("result").style.display = 'block';
                    for(var i=0; i<first.length; i++)
                    {
                            for(var j=0; j<second.length; j++)
                            {
                                    if(first[i] == second[j])
                                    {
                                            var a1 = first.substring(0,i);
                                            var a2 = first.substring(i+1,first.length);
                                            first = a1+a2;
                                            i=-1;
                                            var b1 = second.substring(0,j);
                                            var b2 = second.substring(j+1,second.length);
                                            second = b1+b2;
                                            j=-1;
                                            break;
                                    }
                            }
                    }

                    var ss=(first+second);
                    var l=ss.length;
                    var ar = new Array("F", "L", "A", "M", "E", "S");
                    var stp=1;

                    for(var x=6; x>1; x--)
                    {
                            var g=((l%x)+stp)-1;
                            if(g>x)
                            {
                                    g=g%x;
                            }
                            if(g==0)
                            {
                                    g=ar.length;
                            }
                            ar.splice(g-1,1);
                            stp=g;
                            //alert(ar);
                    }

                    if(ar=="F")
                    {
                            //res="FRIENDS";
							document.getElementById("display_flame").innerHTML = 'BẠN BÈ';
							document.getElementById("display_flame").style.color='brown';
                    }
                    else if(ar=="L")
                    {
                            //res="LOVER";
							document.getElementById("display_flame").innerHTML = 'NGƯỜI YÊU';
							document.getElementById("display_flame").style.color='#FF0080';
                    }
                    else if(ar=="A")
                    {
                            //res="AFFECTION";
							document.getElementById("display_flame").innerHTML = 'TRI KỶ';
							document.getElementById("display_flame").style.color='#DBA901';
                    }
                    else if(ar=="M")
                    {
                            //res="MARRIAGE";
							document.getElementById("display_flame").innerHTML = 'VỢ CHỒNG';
							document.getElementById("display_flame").style.color='#a10b0b';
                    }
                    else if(ar=="E")
                    {
                            //res="ENEMY";
							document.getElementById("display_flame").innerHTML = 'KẺ THÙ';
							document.getElementById("display_flame").style.color='#088a2b';
                    }
                    else if(ar=="S")
                    {
                            //res="SISTER";
							document.getElementById("display_flame").innerHTML = 'CHỊ EM';
							document.getElementById("display_flame").style.color='violet';
                    }
                    document.getElementById("nam"+1).style.display = 'block';
                    document.getElementById("nam"+1).textContent= "Mối quan hệ của " +nam + " & " +names+ " là :";
            }
            else
            {
                    document.getElementById("nam"+1).style.display = 'none';
                    count++;
                    if(count==4)
                    {
                            alert("Nhập tên khác");
                            document.getElementById("result").style.display = 'block';
                    }
            }
    }
    else
    {
            return false;
    }
}
