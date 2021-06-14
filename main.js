var images=["Family Tree.jpg","daadi.jpg","https://i.postimg.cc/wjMnFtMX/father.jpg","https://i.postimg.cc/bw5W5zSK/mother.jpg","https://i.postimg.cc/JnL6wtrd/sister.jpg","brother.jpg"];
var members=["Family Tree","Shakti Sawhney (my daadi)","Raghav Sawhney (my dad)","Disha Sawhney (my mom)","Adiya Sawhney (me)","Kabir Sawhney (my younger brother)"];
var counting=0;
function change(){
    if(counting==6){
        counting=0;
    }
    document.getElementById("cover").src=images[counting];
    document.getElementById("names").innerHTML=members[counting];
    counting++;
}