    // const btnGetLatestRepos = document.getElementById('btnGetLatestRepos');
    // btnGetLatestRepos.addEventListener('mouseover', get5Repos);

window.addEventListener('load',get5Repos);

const ul1 = document.getElementById('ul1');

async function get5Repos() {
// clear();
    
    const url = "https://api.github.com/users/cod-lab/repos?sort=created";     // get my repos in desc order they created
    const response = await fetch(url);
    const result = await response.json();

    var j=-1;
    for(var i in result) {
        if(result[i].fork == false)
        {
            var li = document.createElement('li');
            var a = li.appendChild(document.createElement('a'));

                // const anchor = document.createElement('a')

                // const str1 = "-";
                // const str2 = str1.fontcolor('black');
                // const str1 = '  - ';
                // const str2 = result[i].full_name.replace('cod-lab/','&nbsp;');
            a.href = result[i].html_url;
                // str2 = str1;
                // a.textContent = str1.concat(str2);
                // const str3 = ' - ';
                // const str4 = str1.fontcolor('red').concat(str2);
                // a.textContent = str4;

            a.textContent = result[i].full_name.replace('cod-lab/',' - ');
                // a = a.concat(' ',)
                // a.textContent.fontcolor('red');

                // anchor.classList.add("cls1")

                // divResult.appendChild(anchor)
                // divResult.appendChild(document.createElement('br'))
            ul1.appendChild(li);

            ++j;
        }
        if(j==4) break;
    }

    html2canvas(document.getElementById('sec'))
        .then(function (canvas) {
            var imgdata = canvas.toDataURL("image/png",0.9);

            document.getElementById('image').src=imgdata;
    
            console.log(imgdata);
        })
}

// async function clear() {              // clear earlier result before printing new
//     while(divResult.firstChild)
//         divResult.removeChild(divResult.firstChild);
// }
