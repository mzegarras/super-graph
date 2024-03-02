package net.csonic.customers.graphql;

import net.csonic.customers.graphql.datasource.entity.CustomerEntity;
import net.csonic.customers.graphql.datasource.entity.PhoneEntity;
import net.csonic.customers.graphql.types.*;
import org.apache.commons.lang3.StringUtils;
import org.ocpsoft.prettytime.PrettyTime;

import java.time.ZoneOffset;

public class GraphqlBeanMapper {

    private static final PrettyTime PRETTY_TIME = new PrettyTime();

    private static final ZoneOffset ZONE_OFFSET = ZoneOffset.ofHours(5);

    public static Phone mapToGraphql(PhoneEntity original) {
        return Phone.newBuilder()
                .id(original.getId().toString())
                .phone(original.getPhone())
                .createDateTime(original.getCreationTimestamp().atOffset(ZONE_OFFSET))
                .build();
    }

    public static Customer mapToGraphql(CustomerEntity original) {

        var createDateTime = original.getCreationTimestamp().atOffset(ZONE_OFFSET);
        var birthDateTime = original.getBirthDate().atOffset(ZONE_OFFSET);

        var documentType = StringUtils.equalsIgnoreCase(
                original.getDocumentType(), TypesDocument.DNI.toString()) ?
                TypesDocument.DNI : TypesDocument.PASSPORT;


        return Customer.newBuilder()
                .id(original.getId().toString())
                .firstName(original.getFirstName())
                .lastName(original.getLastName())
                .address(original.getAddress())
                .createDateTime(createDateTime)
                .email(original.getEmail())
                .birthDate(birthDateTime)
                .gender(TypesGender.valueOf(original.getGender()))
                //.phones(phones)
                .document(DocumentType.newBuilder()
                        .type(documentType)
                        .number(original.getDocumentNumber())
                        .build())
                .build();
    }


    //RelationEntity
}
