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
        let nodeArr: number[] = [];
        let edgeArr: number[] = [];

        const firstNode = Math.floor(gridWidth / edgeDiv);
        const lastNode = gridWidth - firstNode;
        const nodeSpacing = (firstNode * 2) + 2;
        let nodeLocation = firstNode;
        let iIndex = 1;

        for (let j = 0; j <= gridWidth; j++) {

            if (j === firstNode) {
                nodeArr.push(treeArray[i][0]); // Add first node to nodeArr
                nodeLocation = firstNode + nodeSpacing; // Update the next node location
                edgeArr.push(-1); // Add -1 key to edgeArr
            } 
            else if (j === nodeLocation) {
                nodeArr.push(treeArray[i][iIndex]);
                nodeLocation += nodeSpacing;
                iIndex++;
                if (i !== treeArray.length - 1) {
                    edgeArr.push(-1);
                }
            }
            else if (j === lastNode) {
                nodeArr.push(treeArray[i][treeArray[i].length - 1]);
                nodeLocation = 0;
                iIndex = 0;
            }      
            else {
                nodeArr.push(0);
                edgeArr.push(0);
            }
        }

        edgeDiv *= 2;

        if (i !== treeArray.length - 1) {
            nodeMatrix.push(nodeArr);
            nodeMatrix.push(edgeArr);
        } else {
            nodeMatrix.push(nodeArr);
        }
    }

    return nodeMatrix;
}