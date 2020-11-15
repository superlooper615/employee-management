<template>
  <el-table
    :data="tableData"
    style="width: 100%"
    :row-class-name="tableRowClassName">
    <el-button type="success">ADD</el-button>
    <el-table-column
      prop="id"
      label="ID"
      width="180">
    </el-table-column>
    <el-table-column
      prop="model"
      label="Model"
      width="180">
    </el-table-column>
    <el-table-column
      prop="serialNumber"
      label="Serial number"
      width="180">
    </el-table-column>
    <el-table-column
      prop="captain"
      label="Captain"
      width="180">
    </el-table-column>
    <el-table-column
      prop="status"
      label="Status"
      width="180">
    </el-table-column>
    <el-table-column
      prop="date"
      label="DATE"
      width="180">
    </el-table-column>
    <el-table-column
      prop="option"
      label="Option"
      width="280">
        <el-button size='small'> <span  class='el-icon-upload2'></span>DELETE</el-button>
        <el-button size='small'> <span  class='el-icon-upload2'></span> MODIFY</el-button>
    </el-table-column>
  </el-table>
</template>



<script>
  export default {
    methods: {
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }else if (rowIndex === 5) {
          return 'success-row';
        }else if (rowIndex === 7) {
          return 'success-row';
        } else if (rowIndex === 9) {
          return 'success-row';
        }
        return '';
      }
    },

    data() {
      const item = {
        id: '1',
        model: 'PRESTIGE 520',
        serialNumber: '301',
        captain: 'Chonghe Ping',
        status: 'working',
        date: '10-25-2020',
      };
      return {
        tableData: Array(10).fill(item),
      };
    },
  }
</script>

<style>
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>