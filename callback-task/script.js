let div=document.getElementById("divition");
console.log(div);

setTimeout(() => {
    div.innerText="10";
    setTimeout(() => {
        div.innerText="9";
        setTimeout(() => {
            div.innerText="8";
            setTimeout(() => {
                div.innerText="7";
                setTimeout(() => {
                    div.innerText="6";
                    setTimeout(() => {
                        div.innerText="5";
                        setTimeout(() => {
                            div.innerText="4";
                            setTimeout(() => {
                                div.innerText="3";
                                setTimeout(() => {
                                    div.innerText="2";
                                    setTimeout(() => {
                                        div.innerText="1";
                                        setTimeout(() => {
                                            div.innerText="Happy Independence Day";
                                            div.style.color='navyblue';
                                            div.style.background='linear-gradient(crimson,white,green)';
                                            div.setAttribute("class","align");
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);