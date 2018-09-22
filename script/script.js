! function () {
    var duration = 50;
    var actions = document.querySelector('.actions')
    // console.log(actions)
    actions.addEventListener('click', function (e) {
        var button = e.target
        var speed = button.id
        var brothers = getBrothers(button)
        brothers.forEach(function (el) {
            el.classList.remove('active')
        })
        button.classList.add('active')
        switch (speed) {
            case 'slow':
                duration = 100
                break
            case 'normal':
                duration = 50
                break
            case 'fast':
                duration = 10
                break
        }
    })

    function writeCode(prefix, code, fn) {
        let container = document.querySelector('#code')
        let styleTag = document.querySelector('#styleTag')
        let n = 0
        
        var timer = setTimeout(function run() {
            n++
            container.innerHTML = code.substring(0, n)
            styleTag.innerHTML = code.substring(0, n)
            container.scrollTop = container.scrollHeight
            if (n < code.length) {
                setTimeout(run, duration)
            } else {
                fn && fn.call()
            }
        })

    }
    let code = `
    /* 大家好,今天给你们画一只皮卡丘 */
    /* 首先准备一张画板 */
    .code-wrapper{
        flex: 1;
        height: 50%;
        background:#f5f7f9;
        color:#4c5161;
    }
    .preview-wrapper{
        flex: 1;
        height: 50%;
        border-top: 2px solid white;
    }
    .preview{
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #fee433;
    }
    .wrapper{
        width: 100%;
        height: 165px;
        position: relative;
    }
    .wrapper > :not(:last-child){
        z-index: 1;
    }
    /* 我先画他的鼻子 */
    .nose{
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 12px;
        border-radius: 50%;
        border-color: black transparent transparent;
        position: absolute;
        left: 50%;
        top: 28px;
        margin-left: -12px;
    }

    /* 然后画他的眼睛 */
    .eye{
        width: 49px;
        height: 49px;
        background: #2e2e2e;
        position: absolute;
        border-radius: 50%;
        border:2px solid #000;
    }
    .eye::before{
        content: '';
        display: block;
        width: 24px;
        height: 24px;
        background: white;
        position: absolute;
        border-radius: 50%;
        left: 6px;
        top: -1px;
        border: 2px solid #000;
    }
    .eye.left{
        right: 50%;
        margin-right: 90px;
    }
    .eye.right{
        left: 50%;
        margin-left: 90px;
    }
    /* 然后画他的脸 */
    .face{
        width: 68px;
        height: 68px;
        background: #fc0d1c;
        border: 2px solid black;
        border-radius: 50%;
        position: absolute;
    }
    .face.left{
        right: 50%;
        top: 85px;
        margin-right: 116px;
    }
    .face.right{
        left: 50%;
        top: 85px;
        margin-left:116px;
    }
    /* 然后画他的嘴唇 */
    .upperLip{
        height: 22px;
        width: 80px;
        border: 3px solid black;
        position: absolute;
        top: 52px;
        background: #fee433;
    }
    .upperLip.left{
        right: 50%;
        border-bottom-left-radius: 40px 22px;
        border-top: none;
        border-right: none;
        transform: rotate(-20deg);
    }
    .upperLip.right{
        left: 50%;
        border-bottom-right-radius: 40px 22px;
        border-top: none;
        border-left: none;
        transform: rotate(20deg);
    }
    /* 最后画他的舌头 */
    .lowerLip-wrapper{
        position: absolute;
        bottom: -30px;
        left: 50%;
        margin-left:-150px;
        /* z-index:-1; */
        height: 135px;
        width: 300px;
        overflow: hidden;
    }
    .lowerLip{
        width: 300px;
        height: 3500px;
        background: #990513;
        border: 2px solid black;
        border-radius: 200px/2000px;
        position: absolute;
        bottom: 0;
        overflow: hidden;
    }
    .lowerLip:after{
        content: '';
        position: absolute;
        bottom: -20px;
        width: 100px;
        height: 100px;
        background: #fc4a62;
        left: 50%;
        margin-left: -50px;
        border-radius: 50px;
    } 
    /* 好了,画完了, 谢谢欣赏 */
    `
    writeCode('', code)


    function getBrothers(button) {
        var elements = button.parentNode.children;
        var brothers = [];
        for (var i = 0; i < elements.length; i++) {
            if (elements[i].id !== button.id) {
                brothers.push(elements[i])
            }
        }
        return brothers
    }
}.call()