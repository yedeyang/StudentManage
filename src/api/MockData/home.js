export default {
    getHomeData: () => {
      return {
        code: 200,
        data: {
          tableData: [
            {
                name: "电路",
                today: "180",
                month: "1000",
                total: "5000"
              },
              {
              name: "离散数学",
              today: "200",
              month: "2000",
              total: "114514"
              }
          ]
        }
      }
    }
  }