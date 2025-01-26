const dropDownBtn = document.querySelector(".btn-icon")
const list = document.querySelector(".list")
const checkBoxes = document.querySelectorAll(".list-item")
const dropDownIcon = document.querySelector(".btn-icon")

let clicked = true
dropDownBtn.addEventListener('click', ()=>{

    if (clicked){
        list.style.opacity = 1
        clicked = false
        dropDownIcon.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512">
        <path fill="none" stroke="#ABB5BE" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M112 328l144-144 144 144"/>
        </svg>`
    } else {
        list.style.opacity = 0
        clicked =true
        dropDownIcon.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512">
        <path fill="none" stroke="#ABB5BE" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M112 184l144 144 144-144"/>
        </svg>`}
})


checkBoxes.forEach((listItem)=>{
    listItem.addEventListener('click', ()=>{

        const checkedIcon = listItem.querySelector('.checkbox-icon')
        const text = listItem.querySelector('.drop-down-text')
        checkedIcon.innerHTML = `
            <svg width="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Interface / Checkbox_Check">
                    <path stroke="#008BA1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" id="Vector" d="M8 12L11 15L16 9M4 16.8002V7.2002C4 6.08009 4 5.51962 4.21799 5.0918C4.40973 4.71547 4.71547 4.40973 5.0918 4.21799C5.51962 4 6.08009 4 7.2002 4H16.8002C17.9203 4 18.4796 4 18.9074 4.21799C19.2837 4.40973 19.5905 4.71547 19.7822 5.0918C20 5.5192 20 6.07899 20 7.19691V16.8036C20 17.9215 20 18.4805 19.7822 18.9079C19.5905 19.2842 19.2837 19.5905 18.9074 19.7822C18.48 20 17.921 20 16.8031 20H7.19691C6.07899 20 5.5192 20 5.0918 19.7822C4.71547 19.5905 4.40973 19.2842 4.21799 18.9079C4 18.4801 4 17.9203 4 16.8002Z" />
                </g>
            </svg>`
        text.style.color = 'var(--check-box-activate)'
        
        
    })
})