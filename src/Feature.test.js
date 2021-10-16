const Feature = require("./Feature")

// @ponicode
describe("handleClick", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["George", "Anas", "Edmond"], ["Anas", "Anas", "Jean-Philippe"], ["Anas", "Pierre Edouard", "Michael"]]
        inst = new Feature.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.handleClick("Identity")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.handleClick("Implementation")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.handleClick("Interactions")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.handleClick("Quality")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.handleClick("Configuration")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.handleClick(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("hasSubfeatures", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Jean-Philippe", "Edmond", "Jean-Philippe"], ["Pierre Edouard", "Jean-Philippe", "Edmond"], ["Pierre Edouard", "Edmond", "Pierre Edouard"]]
        inst = new Feature.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.hasSubfeatures({ subfeatures: { length: 10 } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.hasSubfeatures({ subfeatures: { length: 1 } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.hasSubfeatures({ subfeatures: { length: 32 } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.hasSubfeatures({ subfeatures: { length: 64 } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.hasSubfeatures({ subfeatures: { length: 16 } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.hasSubfeatures(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
