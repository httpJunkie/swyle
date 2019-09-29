module Mutations
  class SignS3 < BaseMutation
    argument :filename, String, required: true
    argument :filetype, String, required: true
    type Types::S3PayloadType

    def resolve(filename: "", filetype: "")
        bitch = "you"
        aws_credentials = Aws::Credentials.new(
            ENV['AWS_ACCESS_KEY_ID'],
            ENV['AWS_SECRET_ACCESS_KEY']
        )
        s3_bucket = Aws::S3::Resource.new(
        region: 'us-west-1',
        credentials: aws_credentials
        ).bucket(ENV['S3_BUCKET_NAME'])
        

        signer = Aws::S3::Presigner.new
        presigned_request =  signer.presigned_url(:put_object,
                       bucket: ENV['S3_BUCKET_NAME'],
                       key: filename,
                       acl: 'public-read',
                       content_type: filetype)
                         #s3://swyle-dev/images/08312019-1dmio-lawsey-png
        url = "https://#{ENV['S3_BUCKET_NAME']}.s3.amazonaws.com/#{filename}"
     { 
       url: url, 
       signed_request: presigned_request
      }
    end

  end
end