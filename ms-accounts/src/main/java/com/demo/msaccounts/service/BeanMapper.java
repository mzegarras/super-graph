package com.demo.msaccounts.service;

import com.demo.msaccounts.datasource.entity.AccountEntity;
import com.demo.msaccounts.datasource.entity.TransactionEntity;
import com.demo.msaccounts.model.Account;
import com.demo.msaccounts.model.Transaction;

import java.time.ZoneOffset;

public class BeanMapper {

    private static final ZoneOffset ZONE_OFFSET = ZoneOffset.ofHours(5);

    public static Account mapToGraphql(AccountEntity original) {

        return Account.builder()
                .id(original.getId().toString())
                .number(original.getNumber())
                .currency(original.getCurrency())
                .balance(original.getBalance())
                .customerId(original.getCustomerId().toString())
                .createDateTime(original.getCreationTimestamp().atOffset(ZONE_OFFSET))
                .build();

    }

    public static Transaction mapToGraphql(TransactionEntity original) {
        /*
            id uuid NOT NULL,
    amount NUMERIC(10,4)  NOT NULL,
    currency VARCHAR(20) NOT NULL,
    accountId uuid NOT NULL,
    creation_timestamp timestamp NOT NULL,
        * */
        return Transaction.builder()
                .id(original.getId().toString())
                .amount(original.getAmount())
                .currency(original.getCurrency())
                .accountId(original.getAccountId().toString())
                .fecha(original.getCreationTimestamp().atOffset(ZONE_OFFSET))

                .build();

    }
}
