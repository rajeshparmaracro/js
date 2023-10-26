
        async function myFetchAPI() {
            let response = await fetch('http://localhost:5500/courses.json');
            if (response.ok) { // if HTTP-status is 200-299
                // get the response body 
                let json = await response.json();
                console.log(json)
            }
            else {
                console.log("HTTP-Error: " + response.status);
            }
        }
        myFetchAPI();


        //