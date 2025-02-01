import React from 'react'


const skills = [
    { "name": "Amazon AWS", "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
    { "name": "Cloudflare", "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cloudflare/cloudflare-original-wordmark.svg" },
    { "name": "CSS 3", "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" },
    { "name": "Django", "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" },
    { "name": "Django Rest Framework", "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/djangorest/djangorest-original.svg" },
    { "name": "Docker", "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original-wordmark.svg" },
    { "name": "Git", "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg" },
    { "name": "HTML 5", "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" },
    { "name": "JS", "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
    { "name": "Jenkins", "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg" },
    { "name": "JQuery", "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original-wordmark.svg" },
    { "name": "My SQL", "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" },
    { "name": "PostgreSQL", "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg" },
    { "name": "Postman", "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original-wordmark.svg" },
    { "name": "Python", "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg" },
    { "name": "React", "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" },
    { "name": "Selenium", "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/selenium/selenium-original.svg" },
    { "name": "Tailwind", "logo": "https://tailwindcss.com/_next/static/media/tailwindcss-logotype.a1069bda.svg" },
]

function Skills() {
    return (
        <div className='pt-24 max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-12'>
            <div className="flex flex-wrap justify-center gap-6 lg:pt-24 pt-10">
                {skills.map((skill, index) => (
                    <div key={index} className="w-1/3 sm:w-1/3 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4 bg-white rounded-lg shadow-md flex flex-col items-center">
                        <img src={skill.logo} alt={skill.name} className="lg:w-28 lg:h-28 w-20 h-20" />
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Skills
