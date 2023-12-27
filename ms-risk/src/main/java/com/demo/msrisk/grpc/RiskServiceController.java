package com.demo.msrisk.grpc;


import com.demo.msrisk.service.RiskService;
import io.grpc.stub.StreamObserver;
import net.csonic.grpc.server.EvaluationRequest;
import net.csonic.grpc.server.EvaluationResponse;
import net.csonic.grpc.server.RiskServiceGrpc;
import net.devh.boot.grpc.server.service.GrpcService;
import org.springframework.beans.factory.annotation.Autowired;

@GrpcService
public class RiskServiceController extends RiskServiceGrpc.RiskServiceImplBase {

    @Autowired
    private RiskService riskService;



    @Override
    public void getEvaluation(EvaluationRequest request, StreamObserver<EvaluationResponse> responseObserver) {




        var result = riskService.findByCustomerId(request.getCustomerId());

        var response = EvaluationResponse.newBuilder()
                        .setId(result.getId())
                        .setCustomerId(result.getCustomerId())
                        .setMoodys(result.getCalificacionMoodys())
                        .setPcr(result.getCalificacionPCR())
                        .setSbs(result.getCalificacionSBS())
                        .build();

        responseObserver.onNext(response);
        responseObserver.onCompleted();
    }
}
