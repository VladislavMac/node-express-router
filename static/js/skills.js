const sections = document.querySelectorAll('.content-about-skills-wrapper-sections_section')

sections.forEach(section =>{
    section.addEventListener('mouseenter', mouseEnterSection)
    section.addEventListener('mouseleave', mouseLeaveSection)
})

function mouseLeaveSection(){
    this.section       = this;
    this.optionWrapper = this.section.querySelector('.content-about-skills-wrapper-sections_section-option-wrapper');
    this.optionWrapper.style.height = '0%'
}

function mouseEnterSection(){
    this.section       = this;
    this.optionWrapper = this.section.querySelector('.content-about-skills-wrapper-sections_section-option-wrapper');
    this.optionWrapper.style.height = '100%'
}