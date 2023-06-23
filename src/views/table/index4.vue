<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="ID" width="95">
        <template slot-scope="scope">
          {{ scope.row.id }}
        </template>
      </el-table-column>
      <el-table-column label="标题" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="销量" align="center">
        <template slot-scope="scope">
          {{ scope.row.sale }}
        </template>
      </el-table-column>
      <el-table-column label="签售cut" align="center">
        <template slot-scope="scope">
          {{ scope.row.a }}
        </template>
      </el-table-column>
      <el-table-column label="观礼cut" align="center">
        <template slot-scope="scope">
          {{ scope.row.b }}
        </template>
      </el-table-column>
      <el-table-column v-if="role === 0" label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button type="primary" size="mini" @click="handleUpdate(scope.row)">
            编辑
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <!--新建或编辑对话框-->
    <el-dialog title="修改销量" :visible.sync="dialogFormVisible">
      <el-form :rules="rules" :model="temp" label-position="left" label-width="70px" style="width: 400px; margin-left:50px;">
        <el-form-item label="最新销量" prop="sale">
          <el-input v-model="temp.sale" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">
          取消
        </el-button>
        <el-button type="primary" @click="updateData()">
          确认
        </el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getList, edit } from '@/api/ls'
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'role'
    ])
  },
  data() {
    return {
      list: null,
      listLoading: true,
      dialogFormVisible: false,
      temp: {
        id: null,
        sale: null
      }
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getList().then(response => {
        console.log(response.data)
        this.list = response.data
      })
      this.listLoading = false
    },
    // 打开对话框
    handleUpdate(row) {
      this.temp = Object.assign({}, row) // copy obj
      this.dialogFormVisible = true
    },
    updateData() {
      var isNumber = this.temp.sale === '' || (!isNaN(parseFloat(this.temp.sale)) && isFinite(this.temp.sale))
      if (isNumber) {
        edit(this.temp).then(() => {
          // const index = this.list.findIndex(v => v.id === this.temp.id)
          // this.list.splice(index, 1, this.temp)
          this.fetchData()
          this.dialogFormVisible = false
          this.$notify({
            title: '成功',
            message: '更新成功！',
            type: 'success',
            duration: 2000
          })
        })
      } else {
        this.$message.error('销量只能是数字')
      }
    }
  }
}
</script>
