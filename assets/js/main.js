function updateProfile(profileData) {
    const photo = document.getElementById('photo')
    photo.src = profileData.photo
    photo.alt = profileData.name

    const name = document.getElementById('name')
    name.innerText = profileData.name
    name.alt = profileData.name

    const job = document.getElementById('job')
    job.innerText = profileData.job
    job.href = `https://${profileData.job_link}`
    job.alt = profileData.job


    const location = document.getElementById('location')
    location.innerText = profileData.location
    location.alt = profileData.location

    const number = document.getElementById('number')
    number.innerText = profileData.number
    number.href = `https://wa.me/55${profileData.number}`
    number.alt = profileData.number

    const email = document.getElementById('email')
    email.innerText = profileData.email
    email.href = `mailto:${profileData.email}`
    email.alt = profileData.email






}

function updateSkills(profileData) {
    const softSkills = document.getElementById('softSkills')
    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')
}

function updatehardSkills(profileData) {
    const hardSkills = document.getElementById('hardSkills')
    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`).join('')
}

function updateLanguages(profileData) {
    const languages = document.getElementById('languages')
    languages.innerHTML = profileData.languages.map(languages => `<li>${languages}</li>`).join('')
}

function updatePortfolio(profileData) {
    const portfolio = document.getElementById('portfolio')
    portfolio.innerHTML = profileData.portfolio.map(portfolio => {
        return `
           <li>
               <h3 ${portfolio.github ? 'class="github"' : ''}>${portfolio.name}</h3>

               <a href="${portfolio.url}" target="_blank">GitHub: Explore o repositório aqui!</a>
           </li>
        `
    }).join('')

}


function updateExperience(profileData) {
    const experience = document.getElementById('experience')
    experience.innerHTML = profileData.experience.map(experience => {
        return `
        <li>      
           <h3>${experience.name}</h3>
           <h4>Cargo: ${experience.cargo}</h4>
           <span class="period">${experience.period}</span>
           <p>
               ${experience.description}
           </p>
        </li>
        `
    }).join('')

}

function updateEducation(profileData) {
    const education = document.getElementById('education')
    education.innerHTML = profileData.education.map(education => {
        return `
        <li>
            <h3>${education.name}</h3>
            <h4>${education.institution}</h4>
            <p>${education.title}</p>
            <span class="period">${education.period}</span>
        </li>
        `
    }).join('')

}


function updateCourses(profileData) {
    const courses = document.getElementById('courses')
    courses.innerHTML = profileData.courses.map(courses => {
        return `    
        <li>
           <p>
               <a href="${courses.certificate}" target="_blank">${courses.name}</a>
           </p>
        </li>
        `
    }).join('')

}

(async () => {
    const profileData = await fetchProfileData()
    updateProfile(profileData)
    updateSkills(profileData)
    updatehardSkills(profileData)
    updateLanguages(profileData)
    updatePortfolio(profileData)
    updateExperience(profileData)
    updateEducation(profileData)
    updateCourses(profileData)

})()