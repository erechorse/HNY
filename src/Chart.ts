import * as c3  from 'c3';


export const bar = function() {
    const chart = c3.generate({
        bindto: '#bar-graph',
        size: { width: window.innerWidth * 0.8, height: window.innerWidth * 0.8 * 0.5}, // グラフ描画領域のサイズ
        data: {
          columns: [
            ["感染させた人数", 83, 16, 4, 4, 1, 1, 1]
          ],
          type: "bar"
        },
        bar: {
            width: {
                ratio: 0.5
            }
        }
    });
}