/** @type {import('next').NextConfig} */
const nextConfig = {
    //when we use costom database use like this from where we fetch data or images we have to add domains
    images:{
        domains: ["image.tmdb.org"]
    }
}

module.exports = nextConfig
