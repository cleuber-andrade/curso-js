const request = obj => {
    const xhr = new XMLHttpRequest();
    //get
    xhr.open(obj.method, obj.url, true);
    //set
    xhr.send();

    xhr.addEventListener('load', ()=>{
        if(xhr.status >= 200 && xhr.status < 300){
            obj.success(xhr.responseText);
        }else{
            obj.error(xhr.statusText);                
        }
    });
}