
$(document).ready(function(){
    $('.deleteUser').on("click",
        deleteUser);
    $('.updateUser').on("click",updateUser);
    
    
})

function deleteUser()
{   
    var confirmation = confirm("Are you sure ??");
    if(confirmation){
        $.ajax({
            type : "DELETE",
            url : "/users/delete/"+ $(this).data('id')
        }).done(function(response){
            window.location.replace("/");
        });
             window.location.replace("/");      
    }
    else{
        return false;
    }
}

function updateUser()
{   
    //alert($(this).closest('td').siblings('input.name[type="text"]').text());
    var confirmation = confirm("Are you sure ??");
    var name = $(this).parent().parent().find('.name').val(); 
    var age = $(this).parent().parent().find('.age').val(); 
    var email = $(this).parent().parent().find('.email').val(); 
    if(confirmation){
        $.ajax({
            type : "PUT",
            url : "/users/update/"+ $(this).data('id') + "/" + name + "/" + age + "/" + email
        }).done(function(response){
           // window.location.replace("/");
        });
             window.location.replace("/");      
    }
    else{
        return false;
    }
}

