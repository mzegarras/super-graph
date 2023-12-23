package net.csonic.customers.graphql;

import net.csonic.customers.graphql.datasource.entity.CustomerEntity;
import net.csonic.customers.graphql.types.Customer;
import net.csonic.customers.graphql.types.DocumentType;
import net.csonic.customers.graphql.types.TypesDocument;
import net.csonic.customers.graphql.types.TypesGender;
import org.ocpsoft.prettytime.PrettyTime;
import org.apache.commons.lang3.StringUtils;
import java.time.ZoneOffset;

public class GraphqlBeanMapper {

    private static final PrettyTime PRETTY_TIME = new PrettyTime();

    private static final ZoneOffset ZONE_OFFSET = ZoneOffset.ofHours(5);

    public static Customer mapToGraphql(CustomerEntity original) {
        var result = new Customer();
        var createDateTime = original.getCreationTimestamp().atOffset(ZONE_OFFSET);
        var birthDateTime = original.getBirthDate().atOffset(ZONE_OFFSET);

        var documentType = StringUtils.equalsIgnoreCase(
                original.getDocumentType(), TypesDocument.DNI.toString()) ?
                TypesDocument.DNI : TypesDocument.PASSPORT;

        result.setId(original.getId().toString());
        result.setFirstName(original.getFirstName());
        result.setLastName(original.getLastName());
        result.setAddress(original.getAddress());
        result.setPhone(original.getPhone());
        result.setCreateDateTime(createDateTime);
        result.setEmail(original.getEmail());
        result.setBirthDate(birthDateTime);
        result.setGender(TypesGender.valueOf(original.getGender()));

        var document = new DocumentType();
        document.setType(documentType);
        document.setNumber(original.getDocumentNumber());
        result.setDocument(document);



        return result;
    }

}
