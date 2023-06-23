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
      <el-table-column label="姓名" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <!-- <el-table-column label="大陆销量" align="center">
        <template slot-scope="scope">
          {{ scope.row.inland }}
        </template>
      </el-table-column>
      <el-table-column label="韩国销量" align="center">
        <template slot-scope="scope">
          {{ scope.row.korea }}
        </template>
      </el-table-column> -->
      <el-table-column label="总销量" align="center">
        <template slot-scope="scope">
          {{ scope.row.total }}
        </template>
      </el-table-column>
      <el-table-column label="建议购买本数" align="center">
        <template slot-scope="scope">
          {{ scope.row.d }}
        </template>
      </el-table-column>
      <el-table-column label="建议购买本数" align="center">
        <template slot-scope="scope">
          {{ scope.row.e }}
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getList } from '@/api/sr'

export default {
  data() {
    return {
      list: null,
      listLoading: true
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
    }
  }
}
</script>
