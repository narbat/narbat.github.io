var bobo = JSON.parse(localStorage.answer);
switch (bobo){
    case -6:
    case -4: document.getElementById("vika").innerHTML = "Syöt uuniperunoita välipalaksi 🥔🥔",
        document.getElementById("vika_kuva").src = "data:image/jpeg;base64,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";
    break;

    case -2:
    case 0: document.getElementById("vika").innerHTML = "Olet discord moderator (Otso?) 🎤🦆",
        document.getElementById("vika_kuva").src = "https://pbs.twimg.com/profile_images/1295926549229768704/ynLcWdYe_400x400.jpg";
    break;

    case 2:
    case 4: document.getElementById("vika").innerHTML = "Olet NPC 🗿🗿",
        document.getElementById("vika_kuva").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ2Pn3UzY3BWiBgmdps6AcuV4nE5q2e7WySw&usqp=CAU";
    break;

                
    case 6: document.getElementById("vika").innerHTML = "Olet yhtä goofy, kuin Drake 🐀🐀",
        document.getElementById("vika_kuva").src = "data:image/jpeg;base64,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";
    break;

                
    case 8: document.getElementById("vika").innerHTML = "Olet Giga Chads 🔥🔥",
        document.getElementById("vika_kuva").src = "data:image/jpeg;base64,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";
    break;

                
                
    case 10: document.getElementById("vika").innerHTML = "Olet top G 💯💯",
        document.getElementById("vika_kuva").src = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBISEhISFRIREhISEhEREhEREhEREg8RGBQZGRgUGBgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QGhISGjEdGCExNDQxMTQxMTQ0ND8xNDQ0ND80NDE0NDQ/ND8/ND80MT8/ND8/MTE/NDExNDExNDExNP/AABEIAKgBLAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAACAwEEBQAGB//EADQQAAIBAwMCBQMCBQQDAAAAAAECAAMRIQQSMUFRBSJhcYETkaEGMhSxwdHhI1Jy8UJD8P/EABkBAAMBAQEAAAAAAAAAAAAAAAECAwAEBf/EACARAQEBAQADAQEBAQEBAAAAAAABAhEDITESQTIiEwT/2gAMAwEAAhEDEQA/APGCTIEkGMCVEYokCMAxMwlEMCCv9IwTMNI5RFIJYEzICSp4hyo9/wCUuoZn6x71PYAexvJeT4r4vqEGI1EvIXMcizj1XdmGKtobLicohqRJq/xXxJ3Q6iiKvGLRhoxTEhhCJmBYENZXWpGq8WsesO0WpjlMDOCxiLBDCGrZgYaiC4hboDGZiXWbP6fbaCw/3AfkTHaa/hQtTJ7tf7Whz/CablUeY9jkfMGHWP7T3UfygCejj44df6GJ14N5141IYDCEBRDEwuvJEGEJrWTJkhYz6Zi/qDx8RAhKJwEMCVIlVjFXEgRqiZnKIaCEqwwJmEgjFgpGqIA4m0zFTc5b1mqeD7SiifzkfLfTo8E9uRJZRYAGY5ROKu/KDB3wnMrs1oIam1DK5k77zgDGLQqIxIaU7xqUoKBaLmPCQkpRoSCs5BJYzrQWEAdCGhB4KiFaARipDDRJSSuJgNLfebelXZTUel/kzCp5YCauq1G3ao6AfeHJdRvg7qaH4kQdKCaIJ6sPtaFO/wAPuOHyfXWkgSVEMLKUiFhCQFhATG4kCMVYVNL4EtHSEDdJ6vRkRptMWlh9Ib9IvTajZ6xr6034EThuvg4pwtkJbnpGpSJnSiSqGORDBTBtHKYWGLSQIAMaomYSAdxGgSUoAIajHavCjkuew9u/rEtqGH/rBHoc+8nfJFJ4tVYtzKY5+Zd0rioCUN7cqcEf3lPUXvb/AAZPdlivizc32JeY4GVqbWh7pyV25TUaVwpYwnOY+i6qM2g4PQrRhqnEqajXDgfiU117CPMp63G8iiGBMNPE7c8y3pvElbtBc0JuVprzHACVF1A6WjVqxbmj0/bFusKnUEhiLxeC5KeY9aQiA8YKk3G6YaURUpRw1KjraBV1SW5m5S3UIpnaymaQp7mF+tj8TNWormwORmb3hyB0U9V8p94eWBW0gtSUev4EBY98U0Ha5ilnd4f8xxeT/QgsYBIUQgJShI7bG06F/tBSauhdQLydoxRRdp646S1W1d1tYcQNY43G0ou8Oc9bV9Cap6SPqCV3qxe8y8xEu18vXVY4F/aErsZUWMRj3gEyxvmGBBBhTMKPpC5Udz826xAEsafDKecxdfKOZ7ifEGLnYLhVG0AYFu/uesLR6Ty7rnOLXveTXXzN8n/EsaYn6c8/er16+Mz8RQfTD9ykg8YNiPSVjvHmY3sbep95fQWqMLmzA+wMHVAbGPH+IJqluYrrmMMTQ4j3zGowvZeLGmJPaXVp2ERqdSEB6ntBA1PSsdIL89YttIt8kD3ldqlWobm6KcC3X1mVVZgWDFj0sTL5npy6rSraan0cY6HmVhRIPlP2Md4PplrVQuzy2JOb2wc/eWdX4YabHYcduYe+ye6TSrOvXiamn1BYZmZsIGbTS8Pp94muK46vUnjHqWEmnRzC1NCym8h2dVrMq+IAe8p1PFX6G0OsiEyqWN/KoNuSeAJbOYhrVd/FVG6k3lil9TFwTiVaOrq3uqK3QDjiX6XibL++mRbnbkCNrNnsuddHT+opva3pPV/pjV7yaZ6jHW5GTMPTV6dQeUg36HBE0vBE2VlIwOPve0lVJzj0fjni6UNibd9QgkIMWHcmN8O1YrU94XaymzLzYng+sy/1DRX64c5P0xj4EL9LOzPVvxtFh0FifzKePfLwNY/5631EYiXgqIym1jOi305uLI0jbdx7XiASJf8A4wbNvpaZtZ5sYtvWt4h3lN3vCqN0irTpzjkTtAzQt4gtItHkL18vAhKJC8QlEgYYhrBAjUWZhARidx0N5AENBBZ640P1IwG7gfczjV2oAe0lxen32nHzKerbIHpOHeeaer49dwTrdUy2ItyPtHVHuhPQ2iWo4ue2JOxghB4wR8mLJBqaC2Eei3kKlh8RtFbmLoYc1rSm9EXuc5luoInmLG1C2APP/Uq1fDqbG5l/6d4YoCUmrEtYlUNPpfpnykD/AI8kcznW+bmX2pASu6Tfov5ij9NRccmX9M4AHSKFKxjVSC1TOeLiVM/MbqHutpSpkgy42REaxm6iivQD1vK5AAZQuCD95o16VxK38KekpnXE9Z6wW0lQcA/BIImx4VpSisXVnZhYKbkD1Jl1EI5UGXEY9gI2vJaWeNhN4e9M71xc5UcAT0PhTBnpk4yL+45kfSJ5t7SEQKR6H7Sfen/L0H6js2xuhX72xI/S6ZqHptH853iI3U9P3KkfkTT8L0/06YB/cfM3seBKeLPaXeuZW1XtLK6RiL2iVYXmmmsULadNlckrLrCwlVmMsap7yjVe06fHnkJugd83kmoYu868tImIm8GEVxzOtDwHzO3SEFnpP1L4AmlSm6VA4cD34uWnnB9pyKDQRixKmNQwsaBG01i0Ij0ImY2ml1Ze4P36TOr0ywxys00bIPa2O8qa1CHJHUXHaxnL5s8dn/z776Z5qHbtOLS0jb6d+eF+O8HU6begz5rfmK01JkVtxuSOnQiQjprQVMWE5DaK09W4H2hk5h1PQ5q063F4gJCWpYWkF5I1cBJEgNOzGIkiCVEIxTtME+pKxTuOkl3xK9/SDh1mmby8kz6LS6sGoXqzSQG4gVNMBmFQMe1jFlDioFIjUbpYRjKLSEAhrRO2D1GI4EQtOgeqqzQL8a2opXbSIOlyfa81ybnsOB/aUS+7UEDIo0wL9mIvLSHH5noeDMkcnl1/BO9uJBqGd1F+L/iP8R+n5dg6Zl+TqKmXJxz1+Iir3l3Q6lUuSL3x3lOs/mJtzc2950ZzxLVJEIGATIUxuFOBgziZ14eM+cPqqlSwZ2YAeW5/bADf/fziVhicfFTgY5REoI5ZmMURqRSmNBmDhyxrjelrZXIPcRSGWKbEcc/i0Tef1k+NXN6oX/6lbU1ALgHJ6TXqadH7g+kGrpaYpuQvmFvMTfk5nL/52Xtds8+dev6xqTEAfn3lqm3EqE49rj0k02g1FM1fvCEShjQZGqCkloN4t2mhaJ3lZnhO0rO1o3CHrcmGUMr1dUEW9r9oOg8TWpcWII7wzNPNLqCWxxKyVVjn1KBOLepi/mhabTqWllXmejAi44j6dSJZ7GLTNAEDdOvMwy0t+Cj/AFb9hf2AyZRY4mh4UjhajKNxNkAHrg/gx8Z7SavI2/DgCtSp1qVD8AXAlxBaVdDR+nTVCQTkm3cy4k9HGeZcO72iKTq649pYoqCbesu6rTIEuObQ51f0Fnp54iLqcx9ZcxRQnjjg+87c30jZ7IvBBlhqBsx5C8xSJu4jcKmdD2HPobQYQfMAIawRCWcKxqxiwAZywMekesrJzLAm4xyGMRohDGiZjw0jUMdhz2grO1I8nvE38U8c/wCmIevuZyvjj5kuvmPaCvJPS1pyV2xZpe8erSmj2MsJUB6Sdh804mLYwop3Agja9BY5iqiiC9cZA+8rVdRK5yndJKgnPTiFRZc7Ra/MpNUJMcl7DvH5wt0u06LsRmy/mHq9CWsqvfIJzxKq1ycXh0KhBJJOPzE1Gmmrp6W0W7WjhF0atwM5lgCRsqkqBJDTjFuYINqWaep8GG2kCP8AyJJPcWxf5nkafmdF7sFx6z3TpssgwFUD523nT4M9rm82hpmx7Y945MRdBcRhnZa5pKsKYbMx7/MTTM0tHTVuZP8Ap/4x69MyuzlcWPf3M2tfSAvaYupTrOvx67EtZA9c+bH7rXg0n2zrTgs6IkI1LgjvmAHHaFtkWmF8vhLB/tce3eNVJwqdSDDUzlSOFLtM3U0hNDS6VqmFBJ4AAlanTt9pr+Car6NRWtfab+8F60V9X4dUp/vQr/yFj8SuDPo3iuq0uo0+92AbaSn+5WtPndTn5hnwb9GsXqXwvzOLWgas/t+/4k/L6yr4vemZWw3vAUxmp4/rK6HE5XZ8OK2FzCpOOkUHHQ3jKREWxs1ZV+Zl6rUeaxPBzL1RrCZj0dxPS/WbMDWu+kWZsDEdT0bH92Ir6NSnkWt3MMvUOTf4jwsycNKg5PxLX0aZWy2P85lM3e86lU2m4JEPLR/MadDRXvi0Gvo2UXyeuJT+u5J8xluh4gy/uyItlLZBU9TbpYgW+Zcpam1r5Bmfqa1NhcH1gUa2e6wXPps656bjPEM8hHuolao9yfTkSf5H9Nn9N0y2oRiAQrbm7WE9e7Ekk8kkn+n4mV4Bplp0Q4HnqAX9B/maW6d3hzyOXya7V3QqCbE2lqtSA4zKFPE09DR39ek25ehmqgMcjkcRutoBGx1lZCLwTtg1ZQFj1Mr6nS4Mv6OooOYWtqKePUR8a56CzrzbCxnFpYq0SWNhxKxndjUsR1OUV5FpAMKOR888UqU6ld2oqQhICJxc2AwO14FTTPTba6MhsCFYWwes19J4QiVELVQVVlJ2m5FiDNz9SPR1W0btrotl7uOl/eclzYP6seRp05q6Pw5n4F47QeGgsPOFyOn7fWe80OgUbCTuuACbWx3iWXoXTwtbw5kGVIlN0KmfT/EPC1ZPKOOn9Z4+v4al3J5WxVeLm4BEbMlNLYxaNGpUWyKzkZsO0t6f9OauojVNgVVudrGzNbsJtaEU6VR8qq/SDtt4W4OD6y5pvHtOQVFe3uLAd5Ld5fSk+PDVEYYKsCL3BHETqWyvsJ9FfXabbu+pSY2OPLckT594i96jEgLz+0iwziS8mu5X8M/6ZmpGD6dJQ3H7dJdqvzM5msb+snn46NHJUFuLRi1JVZoaDtgTXISrivcTqaZldnjKLm0Tg9XHAItzKrkrjkdIwMYFVx1mlP6QqK0k6UXFgIoVAIaVxG9lthy6RethGfRpjFpXLX6xiJ15tFoXhq6ZACbZP3EQlAAy0XldqljxNPZaY79Pa3xHeHaY1aiqMAkbj6DJlMEucAk9B3nrPBNCaNO7W3vn/iO0r4890lvUk9NlSMBcKtlUeg6wrxKNGLmducua3pyPLlDVbeDMwmcKk1zK0vGlX1RY5MCnUzKYJJ55Npa09ByeOOvSJczMNLat7pBeBUpmLD2wYM578NOxcCjaWvk3AHraZVRQLYIIvePFQgW6QNS+F9/mX8GLm3pd2WE2Nr9J1zCNUwNt83nVxB4/R6cs4AVxd9oa1rm9hLdHweutR9wxTa5N77s4AnTp598ldcxHuaNCgqg/TW4ABN+tuDD+vZmVTtTG2xNrzp0TWrwt8eerj+IgIQLljj5/tMvU0qdSmzcVLXAI5bpOnTm/d6rfHnjxWtTV2fcjC5s20eW2bCK8M8OFQVN5ZCi+Xy8tfg3kTpWapPzFFzypW2y4OLWt6wGcEA9xg98zp0Ty28V8UnVWqsoVUkzomVtK4e3Maj3x0kTo5Es/SclQjE6dFrT6v6dbi+cyalEEZEidEp6z69BhgRFOi5IHmnTo0+JX609No26mXhRsJ06StvTxT1NQ4AP2gU1J7+5kzo8I3/AvDiv+q4wDZB697T0XIz15nTp2eL459/UBgOZYoi4vcD0N/vOnTopDjpsbg6nNrXnfwx6EH7zp0AUIptc2IuuZteG6kJSIJW4v15nToNScHJDVHZS1h7X5lOu91JyD2nTo2MwNVFLcRe3f34hut1CkeY5Vux63nTpbJUNpWAJx94gAzp0cH//Z";
    break;
}