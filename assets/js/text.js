new TypeIt("#simpleUsage", {
    strings: "يوسف الصباحي",
    speed: 50,
    cursor: true,
    loop: true,
    breakLines: false,
    autoStart: true,
    waitUntilVisible: true,
})
.pause(3000)
.go();