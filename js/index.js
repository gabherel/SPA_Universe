import { Router } from './router.js'


const router = new Router()
router.add('/', "/pages/home.html")
router.add("/universo", "/pages/universo.html")
router.add("/exploracao", "/pages/exploracao.html")
router.add(404, "/pages/404.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()


const colors = {
  home:document.querySelector('.home'),
  universe: document.querySelector('.universe'),
  exploration: document.querySelector('.exploration')
}


colors.home.addEventListener('click', () => {
  clicou(colors.home)
  notOn(colors.universe)
  notOn(colors.exploration)
})

colors.universe.addEventListener('click', () => {
  notOn(colors.home)
  clicou(colors.universe)
  notOn(colors.exploration)
})

colors.exploration.addEventListener('click', () => {
  notOn(colors.home)
  notOn(colors.universe)
  clicou(colors.exploration)
})

function clicou(tag){
  tag.style.color = '#FFFFFF'
}

function notOn(tag){
  tag.style.color = 'hsla(240, 7%, 78%, 1)'
}
