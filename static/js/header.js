const headerLinks = document.querySelectorAll('.header-nav-item_link');

headerLinks.forEach(link =>{
    link.addEventListener('mouseenter', mouseEnterLink)
    link.addEventListener('mouseleave', mouseLeaveLink)
})

function setLine(line){
    this.line = line;
    this.line.style.width = `10vw`;
}

function mouseLeaveLink(){
    this.link             = this;
    this.parentlink       = this.link.parentNode;
    this.line             = this.parentlink.querySelector('.header-nav-item_line')
    this.line.style.width = `0vw`
}

function mouseEnterLink(){
    this.link       = this;
    this.parentlink = this.link.parentNode;
    this.line       = this.parentlink.querySelector('.header-nav-item_line')
    setLine(this.line)
}