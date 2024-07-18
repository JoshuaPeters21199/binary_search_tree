/**
 * Creates an array of arrays which contains the layout for the grid/tree
 * @param number gridWith - The grid width
 * @param number gidHeight - The grid height
 * @param array treeArray - An array of arrays that contain the nodes at each levle
 * @returns An array of arrays
 */
export function createGridMatrix(gridWidth: number, treeArray: number[][]): number[][] {
    let nodeMatrix: number[][] = [];
    let edgeDiv = 2;

    for (let i = 0; i < treeArray.length; i++) {
        let rowArr: number[] = [];

        const firstNode = Math.floor(gridWidth / edgeDiv);
        const lastNode = gridWidth - firstNode;
        const nodeSpacing = (firstNode * 2) + 2;
        let nodeLocation = firstNode;
        let iIndex = 1;

        for (let j = 0; j <= gridWidth; j++) {

            if (j === firstNode) {
                rowArr.push(treeArray[i][0]);
                nodeLocation = firstNode + nodeSpacing;
            } 
            else if (j === nodeLocation) {
                rowArr.push(treeArray[i][iIndex]);
                nodeLocation += nodeSpacing;
                iIndex++;
            }
            else if (j === lastNode) {
                rowArr.push(treeArray[i][treeArray[i].length - 1]);
                nodeLocation = 0;
                iIndex = 0;
            }      
            else {
                rowArr.push(0);
            }
        }

        edgeDiv *= 2;
        if (i !== treeArray.length - 1) {
            nodeMatrix.push(rowArr);
            let edgeArr = [];
            for (let k = 0; k < gridWidth + 1; k++) {
                edgeArr.push(0);
            }
            nodeMatrix.push(edgeArr);
        } else {
            nodeMatrix.push(rowArr);
        }
    }

    return nodeMatrix;
}