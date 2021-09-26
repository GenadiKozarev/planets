function displayPlanet(planet) {
    fetch('https://api.le-systeme-solaire.net/rest/bodies/' + planet)
        .then(data => data.json())
        .then((planetData) => {
            console.log(planetData)

            document.querySelector('div .planetImage').innerHTML = '<img name="imgName" class="imgName" ' +
                'src="detailed-planets/' + planet + '.png" alt="image of the planet ' + planetData.englishName + '">',
            document.querySelector('h1').innerHTML = planetData.englishName,
            document.querySelector('div.overviewLink').innerHTML = '<a class="overviewLink" href="#">01 - Overview</a>',
            document.querySelector('div.intStrLink').innerHTML = '<a class="intStrLink" href="#">02 - Internal Structure</a>',
            document.querySelector('div.surfTechLink').innerHTML = '<a class="surfTechLink" href="#">03 - Surface Geology</a>',
            document.querySelector('a.overviewLink').addEventListener('click', () => {
                document.querySelector('.intStrStats').style.display = 'none'
                document.querySelector('.surfTechStats').style.display = 'none'
                document.querySelector('div.overviewStats').innerHTML =
                    '<div class="rotationTime">'
                    + '<h3 class="rotationTimeTitle">Rotation Time</h3>'
                    + '<p class="rotationTimeStat">' + planetData.sideralRotation + ' hours' + '</p>'
                    + '</div>'
                    + '<div class="revolutionTime">'
                    + '<h3 class="revolutionTimeTitle">Revolution Time</h3>'
                    + '<p class="revolutionTimeStat">' + planetData.sideralOrbit + ' days' + '</p>'
                    + '</div>'
                    + '<div class="radius">'
                    + '<h3 class="radiusTitle">Radius</h3>'
                    + '<p class="radiusStat">' + planetData.equaRadius + ' km' + '</p>'
                    + '</div>'
                    + '</div>'
                    + '<div class="averageTemp">'
                    + '<h3 class="averageTempTitle">Average Temperature</h3>'
                    + '<p class="averageTempStat">' + planetData.avgTemp + ' &#8457' + '</p>'
                    + '</div>'
                })
        })
}

document.querySelector('h2.welcome').addEventListener("mouseover", () => {
    document.querySelector('h2.welcome').innerHTML = "<h2 class=\"welcome\"> Now click on a planet's name :)</h2>"
})

document.querySelector('#mercure').addEventListener('click', () => {
    document.querySelector('h2.welcome').style.display = 'none'
    displayPlanet('mercure')
    document.querySelector('div.overviewStats').innerHTML = ''
})

document.querySelector('#venus').addEventListener('click', () => {
    document.querySelector('h2.welcome').style.display = 'none'
    displayPlanet('venus')
    document.querySelector('div.overviewStats').innerHTML = ''
})

document.querySelector('#earth').addEventListener('click', () => {
    document.querySelector('h2.welcome').style.display = 'none'
    displayPlanet('earth')
    document.querySelector('div.overviewStats').innerHTML = ''
})

document.querySelector('#mars').addEventListener('click', () => {
    document.querySelector('h2.welcome').style.display = 'none'
    displayPlanet('mars')
    document.querySelector('div.overviewStats').innerHTML = ''
})

document.querySelector('#jupiter').addEventListener('click', () => {
    document.querySelector('h2.welcome').style.display = 'none'
    displayPlanet('jupiter')
    document.querySelector('div.overviewStats').innerHTML = ''
})

document.querySelector('#saturn').addEventListener('click', () => {
    document.querySelector('h2.welcome').style.display = 'none'
    displayPlanet('saturn')
    document.querySelector('div.overviewStats').innerHTML = ''
})

document.querySelector('#uranus').addEventListener('click', () => {
    document.querySelector('h2.welcome').style.display = 'none'
    displayPlanet('uranus')
    document.querySelector('div.overviewStats').innerHTML = ''
})

document.querySelector('#neptune').addEventListener('click', () => {
    document.querySelector('h2.welcome').style.display = 'none'
    displayPlanet('neptune')
    document.querySelector('div.overviewStats').innerHTML = ''
})