const container = document.getElementsByClassName('content');

for(i = 0; i<container.length; i++)
{
    container[i].addEventListener('click',function(){
        this.classList.toggle('active')
    })
}