package net.csonic.customers.graphql.datasource.dao;

import net.csonic.customers.graphql.datasource.entity.CustomerEntity;
import net.csonic.customers.graphql.datasource.entity.PhoneEntity;
import net.csonic.customers.graphql.datasource.entity.RelationEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.stereotype.Component;

import java.util.Collections;
import java.util.List;
import java.util.Optional;


@Component
public class CustomerDaoImpl implements CustomerDao {

    private final JdbcTemplate jdbcTemplate;
    private final NamedParameterJdbcTemplate  jdbcTemplate2;
    private final String SQL_FINDBY_CIC= "select * from customers c where id=?";
    private final String SQL_GET_ALL= "select * from customers c  where (:first_name is null or  upper(first_name) like  '%' || upper(:first_name) || '%') " + "and (:last_name is null or upper(last_name) like  '%' || upper(:last_name) || '%')";

    private final String SQL_FINDBY_IDC= "select * from customers c where document_type=? and document_number=?;";

    private final String SQL_GET_ALL_PHONES="select * from customers_phones cp where cp.customer_id IN (:ids)";
    public CustomerDaoImpl(JdbcTemplate jdbcTemplate, NamedParameterJdbcTemplate jdbcTemplate2) {
        this.jdbcTemplate = jdbcTemplate;
        this.jdbcTemplate2 = jdbcTemplate2;
    }

    @Override
    public List<CustomerEntity> findByKeyword(String firstName, String lastName) {

        return jdbcTemplate.query (SQL_GET_ALL, new Object[] { firstName,firstName,lastName,lastName }, new CustomerMapper());

    }

    @Override
    public CustomerEntity findCustomerById(String id) {



        return jdbcTemplate.queryForObject(
                SQL_FINDBY_CIC, new Object[] { id }, new CustomerMapper());
    }

    @Override
    public Optional<CustomerEntity> findByDocumentTypeAndDocumentNumber(String documentType, String documentNumber) {

        return Optional.of(jdbcTemplate.queryForObject(
                SQL_FINDBY_IDC, new Object[] { documentType,documentNumber }, new CustomerMapper()));


    }

    @Override
    public List<PhoneEntity> findPhoneAll(List<String> lstCustomerId) {

        /*
        String inSql = String.join(",", Collections.nCopies(lstCustomerId.size(), "?"));
        var SQL = String.format("select * from customers_phones cp where cp.customer_id IN (%s)", inSql);
        return jdbcTemplate.query (SQL, lstCustomerId.toArray(), new PhoneMapper());
         */

        SqlParameterSource parameters = new MapSqlParameterSource("ids", lstCustomerId);

        return this.jdbcTemplate2.query(SQL_GET_ALL_PHONES,parameters, new PhoneMapper());

    }


    @Override
    public List<RelationEntity> findRelationsAll(List<String> lstCustomerId) {
        var sql = "select cp.*,c.* from customers_relations cp inner join customers c on cp.customer_id=c.id where cp.parent_id IN (:lstCustomerId)";
        SqlParameterSource parameters = new MapSqlParameterSource("lstCustomerId", lstCustomerId);
        return this.jdbcTemplate2.query(sql,parameters, new RelationMapper());
    }
}
