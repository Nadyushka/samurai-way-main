export const updateObjectInArray = (items:Array<any>, objPropName: string, itemsId: number, newObjProps: {}) => {
    return items.map(u => {
        if (u[objPropName] === itemsId) {
            return {...u, ...newObjProps}
        }
        return u
    })
}