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
        
        # presigned_url = s3_bucket.presigned_post(
        #     # key: "#{Rails.env}/#{SecureRandom.uuid}/${file_name}",
        #     key: filename,
        #     success_action_status: '201',
        #     signature_expiration: (Time.now.utc + 15.minutes),
        #     content_type: filetype,
        # )

        signer = Aws::S3::Presigner.new
        presigned_request =  signer.presigned_url(:put_object,
                       bucket: ENV['S3_BUCKET_NAME'],
                       key: filename,
                       acl: 'public-read',
                       content_type: filetype)
     { 
       url: "https//#{ENV['S3_BUCKET_NAME']}.s3.#{ENV['AWS_REGION']}.amazonaws.com/images/#{filename}", 
       signed_request: presigned_request
      }
    end

  end
end