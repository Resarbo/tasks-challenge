using System.Data;

namespace ManagementTask.Infrastructure.Common
{
    public static class DapperExtensions
    {
        public static async Task<IEnumerable<T>> QueryAsync<T>(
            this IDbConnection connection,
            string sql,
            object? param = null)
        {
            return await connection.QueryAsync<T>(sql, param);
        }
    }
}
