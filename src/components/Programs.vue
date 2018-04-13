<template>
  <Row :gutter="10">
    <Col span="6" v-for="(program, index) of list" :key="index">
      <Card class="program">
        <div style="text-align:center">
          <img src="../assets/logo.png">
          <h3>{{program.name}} 综合评分：{{program.score || '暂无'}}</h3>
        </div>
      </Card>
    </Col>
    <Button type="primary" @click.prevent="handleComment">评分测试</Button>
  </Row>

</template>

<script>
  import web3App from '../libs/web3-app'
  import dataList from '../data/programs'

  let account = '0x69cc0a34916FFe52F09599f77a6cC9F1E6B91A61'

  export default {
    name: 'Programs',
    data() {
      return {
        list: []
      }
    },
    methods: {
      getProgramAverageScore() {
        let index = 0
        web3App.contracts.commentFactory.deployed().then(function (commentFactory) {
          // 发送交易领养宠物
          return commentFactory.getProgramAverageScore(index, {from: account});
        }).then(result => {
          console.log(result, result.c[0])
          let score = result.c[0]
          this.$set(this.list[index], 'score', score)
        }).catch(err => {
          console.log(err.message);
        })
      },
      handleComment(programId) {
        // 获取用户账号
        // web3App.web3.eth.getAccounts(function (error, accounts) {
        //   if (error) {
        //     console.log(error);
        //   }
        //
        //   var account = accounts[0]
        web3App.contracts.commentFactory.deployed().then(function (commentFactory) {
          // 发送交易领养宠物
          return commentFactory.comment(0, 10, "测试", {from: account, gas: 3000000});
        }).then(function (result) {
          console.log('请求成功', result);
          // return App.markAdopted();
        }).catch(function (err) {
          console.log(err.message);
        });
        // });
      }
    },
    created() {
      this.list = dataList
      web3App.init()
      this.getProgramAverageScore()
    }
  }
</script>

<style lang="less" scoped>
  .program {
    width: 100%;
    image {
      width: 100%;
    }
  }
</style>
