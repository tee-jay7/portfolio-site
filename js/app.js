const getElement = (selector) => {
  const element = document.querySelector(selector)

  if (element) return element
  throw Error(
    `Please double check your class names, there is no ${selector} class`
  )
}

const getViewsfromDb = async () => {
  try {
    const results = await fetch('https://zn2vm49ea6.execute-api.eu-west-1.amazonaws.com/Prod/visits');
    
    if (!results.ok) {
      throw new Error(`HTTP error! status: ${results.status}`);
    }
    
    const data = await results.json();
    const { _, updated_value } = data;
    views.textContent = `This site has been visited ${updated_value} times 🚀`;
  } catch (error) {
    console.error('Error fetching data:', error);
    views.textContent = 'Error fetching view count ⛑️😓';
  }
};



const links = getElement('.nav-links')
const navBtnDOM = getElement('.nav-btn')

navBtnDOM.addEventListener('click', () => {
  links.classList.toggle('show-links')
})

const date = getElement('#date')
const currentYear = new Date().getFullYear()
date.textContent = currentYear




const views = getElement('#views')
getViewsfromDb()