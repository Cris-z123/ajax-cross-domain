getCSS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/style.css')
    request.onload = () => {
        const style = document.createElement('style')
        style.innerHTML = request.response
        document.body.appendChild(style)
    }
    request.error = () => {
        console.log('请求失败')
    }
    request.send()
}

getJS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/test.js')
    request.onload = () => {
        const js = document.createElement('script')
        js.innerHTML = request.response
        document.body.appendChild(js)
    }
    request.error = () => {
        console.log('请求失败')
    }
    request.send()
}

getHTML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/test.html')
    request.onload = () => {
        const div = document.createElement('div')
        div.innerHTML = request.response
        document.body.appendChild(div)
    }
    request.error = () => {
        console.log('请求失败')
    }
    request.send()
}

getXML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/test.xml')
    request.onreadystatechange = () => {
        if(request.readyState === 4 && request.status === 200){
            const dom = request.responseXML
            const text = dom.getElementsByTagName('warning')[0].textContent
            console.log(text.trim())
        }
    }
    request.send()
}

getNext.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/mock2.json')
    request.onreadystatechange = () => {
        if(request.readyState === 4 && request.status === 200){
            const array = JSON.parse(request.response)
            array.forEach(item => {
                const li = document.createElement('li')
                li.textContent = item.id
                next.appendChild(li)
            })
        }
    }
    request.send()
}