
export function fetchData(){
    const request = fetch("http://localhost:3005/games", { method: 'GET'})
                    .then(response => response.json());
    return request;
  }

export function postData(obj){    
fetch("http://localhost:3005/games", {
        method: 'post',
        headers: {
            
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
      })
    .then(response => {
        console.log('uspesno dodavanje');
      })
}

export function update(obj){     
    let url="http://localhost:3005/games/";
        fetch(`${url}${obj.id}`, {
            method: 'put',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
          })
  }