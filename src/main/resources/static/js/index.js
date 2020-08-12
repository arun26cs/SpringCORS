$(
    () => {
        
        $("#buttonId").click(function() {
            
            $.ajax({
                url: "http://localhost:8080/hello",
                 
                success: function(data) {
                	console.log(data);
 					$("#corstext").html("content loaded..."+data);
                },
                failure: function() {
                    alert("failure");
                }

            });
             


        });

        
        }
 
);