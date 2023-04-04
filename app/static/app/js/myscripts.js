

$('.plus.cart').click(function(){
    // console.log(this.parentNode.children[2])
    var id=$(this).attr("pid").toString();
    var eml = (this.parentNode.children[2])
    console.log("pid = ",id)
    $.ajax({
        type:"GET",
        url:"/pluscart",
        data:{
            prod_id:id
        },
        success:function(data){
            console.log("data = ",data);
        }

    })
})