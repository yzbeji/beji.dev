/* front-page */
let input_cmd = document.getElementById('input-command')
if(input_cmd)
input_cmd.addEventListener('keypress', function ChangeName(event){
    if(event.key == 'Enter')
    {
      if(input_cmd.value == '')
         {
            input_cmd.style.borderColor = 'red'
            let text_query = document.getElementById('query')
            text_query.style.color = 'red'
            text_query.textContent = 'Please put your name!'
            text_query.style.marginLeft = 'calc(50% - 99px)'
            setTimeout(()=>{
                input_cmd.style.borderColor = 'black'
                text_query.style.color = 'black'
                text_query.textContent = 'Hi there, stranger! What is your name?'
                text_query.style.marginLeft = 'calc(50% - 170px)'
            }, 2000)
        }
      else if(input_cmd.value.length > 16)
         {
            input_cmd.style.borderColor = 'red'
            let text_query = document.getElementById('query')
            text_query.style.marginLeft = 'calc(50% - 200px)'
            text_query.style.color = 'red'
            text_query.textContent = 'Oops! Your name is too long. Try again, but shorter!'
            setTimeout(()=>{
                input_cmd.style.borderColor = 'black'
                text_query.textContent = 'Hi there, stranger! What is your name?'
                text_query.style.marginLeft = 'calc(50% - 170px)'
                text_query.style.color = 'black'
            }, 1500)
         }
      else
         {
            let text_query = document.getElementById('query')
            let nickname = input_cmd.value
            text_query.textContent = 'Hi, ' + nickname + '!'
            if(nickname.length <= 8)
            text_query.style.marginLeft = 'calc(50% - 60px)'
            else if(nickname.length <= 12)
            text_query.style.marginLeft = 'calc(50% - 70px)'
            else
            text_query.style.marginLeft = 'calc(50% - 90px)'
            let typewr = document.getElementsByClassName('typewrite')
            setTimeout(()=>{
               window.location.href = 'second-page.html'
            }, 6000)
            document.getElementsByClassName('typewriter')[0].innerHTML = '<h3 class="line-1 anim-typewriter proverb">Explore, create and dream</h3>'
            setTimeout(()=>{
               location.reload()
            }, 6500)
         }
    }
})
/* front-page(end) */
function ChangeGitHub() {
   document.getElementById('first-link').src = 'src-png-hrf/github-animate-start.gif'
   setTimeout(()=>{
      document.getElementById('first-link').src = 'src-png-hrf/github-animate-stop.png'
   }, 1200)
}
function ChangeInstagram() {
   document.getElementById('third-link').src = 'src-png-hrf/instagram-animate-start.gif'
   setTimeout(()=>{
      document.getElementById('third-link').src = 'src-png-hrf/instagram-animate-stop.png'
   }, 1400)
}

/* cat-animation */
let cat_id = document.getElementById('cat')
function Forward() {
   let distance = '25%'
   let Interval = setInterval(()=>{
      let float_distance = distance.replace('%', '')
      float_distance = parseFloat(float_distance)
      if(float_distance < 70)
      {
         distance = `${float_distance + 0.1}%`
         cat_id.style.marginLeft = distance
      }
      else
         {
            cat_id.src = 'src-png-hrf/cat-walking-reverse.gif'
            clearInterval(Interval)
         }
   }, 20)
}
function Backward() {
   let distance = '70%'
   let Interval = setInterval(()=>{
      let float_distance = distance.replace('%', '')
      float_distance = parseFloat(float_distance)
      if(float_distance > 25)
      {
         distance = `${float_distance - 0.1}%`
         cat_id.style.marginLeft = distance
      }
      else
         {
            cat_id.src = 'src-png-hrf/cat-walking.gif'
            clearInterval(Interval)
         }
   }, 20) 
}
window.onload = ()=> {
what_is = true
Forward()
setInterval(()=>{
      if(what_is == false) {
         Forward()
         what_is = true
         }
      else {
         Backward()
         what_is = false
         }
   }, 9200)
}


