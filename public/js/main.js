
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
    var confirmation = confirm("Are you sure ??");
    if(confirmation){
        $.ajax({
            type : "PUT",
            url : "/users/update/"+ $(this).data('id')
        }).done(function(response){
            window.location.replace("/");
        });
             window.location.replace("/");      
    }
    else{
        return false;
    }
}

